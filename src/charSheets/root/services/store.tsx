import React, {
  useState,
  PropsWithChildren,
  useEffect,
  useReducer,
  useMemo,
  useContext,
  useCallback,
} from "react";
import * as R from "ramda";

import { CharSheet } from "../domain";
import {
  getCharSheetFromLS,
  saveCharSheetInLS,
} from "../infrastructure/lsDbService";
import { ErrorDescription } from "../../misc/domain";
import { CombinedRootService } from "../application/ports";
import { CombinedGenericService } from "../../generic/application/ports";
import { CombinedCtDService } from "../../ctd/application/ports";
import { CombinedVtMService } from "../../vtm/application/ports";
import { CombinedMiscService } from "../../misc/application/ports";

import { initialCharSheet } from "./initialValues";
import { getLimits } from "./getLimits";
import { charSheetMetaActions } from "./actions_charSheetMeta";
import { commonPartActions } from "./actions_commonParts";
import { vtmPartActions } from "./actions_vtmParts";
import { ctdPartActions } from "./actions_ctdParts";
import { CompositeReducer } from "./CompositeReducer";

type TakeActions<Reducer> = Reducer extends CompositeReducer<any, infer T>
  ? T
  : never;

type TakeActionPairs<R extends { type: string; props: any }> = R extends unknown
  ? [R["type"], R["props"]]
  : never;

type MergeTuples<T extends { type: string; props: any }> = {
  [key in TakeActionPairs<T> as key[0]]: (...rest: key[1]) => void;
};

export interface StateStore
  extends CombinedRootService,
    CombinedGenericService,
    CombinedCtDService,
    CombinedVtMService,
    CombinedMiscService {}

// @ts-ignore
const StoreContext = React.createContext<StateStore>({});
export const useStore = () => useContext(StoreContext);

interface ProviderProps {}

const reducer = new CompositeReducer<CharSheet>()
  .assign(charSheetMetaActions)
  .assign(commonPartActions)
  .assign(vtmPartActions)
  .assign(ctdPartActions);

export const Provider: React.FC<PropsWithChildren<ProviderProps>> = ({
  children,
}) => {
  const [initialized, setInitialized] = useState(false);

  const [charSheet, dispatch] = useReducer(reducer.reduce, initialCharSheet);

  const limits = useMemo(() => {
    return getLimits(charSheet);
  }, [charSheet.preset, charSheet.profile.generation]);

  useEffect(() => {
    dispatch({
      type: "setState",
      props: ["bloodPerTurn", String(limits.bloodPerTurnLimit)],
    });
  }, [limits.bloodPerTurnLimit]);

  useEffect(() => {
    saveCharSheetInLS(charSheet);
  }, [charSheet]);

  const [errorDescription, setErrorDescription] =
    useState<ErrorDescription | null>(null);

  const functions = useMemo(() => {
    return Object.keys(reducer.actionMap).reduce((acc, el) => {
      // @ts-ignore
      acc[el] = function (...rest: any[]) {
        // @ts-ignore
        dispatch({ type: el, props: [...rest] });
      };
      return acc;
    }, {} as MergeTuples<TakeActions<typeof reducer>>);
  }, [dispatch]);

  if (!initialized) {
    setInitialized(true);
    const cs = getCharSheetFromLS();
    if (cs !== null) {
      functions.setCharSheet(cs);
    }
  }

  const getCharSheet = useCallback(() => R.clone(charSheet), [charSheet]);

  const value: StateStore = {
    ...charSheet,
    ...functions,

    limits,

    getCharSheet,
    errorDescription,
    setErrorDescription,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
