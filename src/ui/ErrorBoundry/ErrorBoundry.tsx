import React, { Component } from 'react';
import './ErrorBoundry.css';

import Button from 'react-bootstrap/Button';
import { LS_KEY } from '../../constants';
import { str2File, makeFileName } from '../../lib/fileUtils';

interface ErrorBoundryProps {
  children: React.ReactNode;
}
interface ErrorBoundryState {
  hasError: boolean;
  seconds: number;
  startTimeMillis: number;
}

export class ErrorBoundry extends Component<ErrorBoundryProps, ErrorBoundryState> {
  reloadTimeoutId: NodeJS.Timeout | undefined;
  secondsIntevalId: NodeJS.Timer | undefined;

  constructor(props: ErrorBoundryProps) {
    super(props);
    this.state = {
      hasError: false,
      seconds: 0,
      startTimeMillis: 0
    };
  }

  componentDidCatch = () => {
    this.setState({
      hasError: true,
      startTimeMillis: Date.now()
    });
    this.reloadTimeoutId = setTimeout(() => window.location.reload(), 30000);
    this.secondsIntevalId = setInterval(() => {
      this.setState(prevState => ({
        seconds : Math.round(((Date.now() - prevState.startTimeMillis) / 1000))
      }))
    }, 100);
  }

  componentWillUnmount() {
    clearTimeout(this.reloadTimeoutId);
    clearInterval(this.secondsIntevalId);
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.hasError) {
      return (
        <div className="tw-m-8">
          <div>
            <p>Поймана ошибка, страница перезагрузится автоматически через 30 секунд (прошло {this.state.seconds} секунд).</p>
            <p>Если после перезагрузки страница снова падает с ошибкой, значит проблема с листом персонажа, хранящимся в памяти браузера.</p>
            <p>Попробуйте сделать перезагрузку с очисткой памяти.</p>
            <p>Чтобы не потерять данные можно скачать лист персонажа и попытаться его исправить вручную.</p>
          </div>
          <br/>
          <Button 
            style={{backgroundColor: '#007bff'}}
            className="tw-mr-8"
            onClick={() => window.location.reload()}
          >
            Принудительная перезагрузка
          </Button>
          <Button 
            style={{backgroundColor: '#007bff'}}
            className="tw-mr-8"
            onClick={() => {
              localStorage.removeItem(LS_KEY);
              window.location.reload();
            }}
          >
            Очистка памяти и принудительная перезагрузка
          </Button>
          <Button 
            style={{backgroundColor: '#007bff'}}
            onClick={() => str2File(localStorage.getItem(LS_KEY), makeFileName('vtm_broken_charsheet', 'txt', new Date()))}
          >
            Скачать лист персонажа из памяти
          </Button>
        </div>
      );
    }
    // eslint-disable-next-line react/destructuring-assignment
    return this.props.children;
  }
}
