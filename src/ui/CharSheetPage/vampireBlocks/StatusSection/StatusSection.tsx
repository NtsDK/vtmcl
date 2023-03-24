import React from 'react';
import { useTranslation } from 'react-i18next';
import classnames from "classnames";

import { Subheader } from '../../primitives/Subheader';
import { HealthSection } from '../../commonBlocks/HealthSection';
import { WillSection } from '../../commonBlocks/WillSection';
import { ExperienceSection } from '../../commonBlocks/ExperienceSection';
import { MeritsSection } from '../../commonBlocks/MeritsSection';
import { FlawsSection } from '../../commonBlocks/FlawsSection';

import { HumanitySection } from './HumanitySection';
import { BloodpoolSection } from './BloodpoolSection';
import { WeaknessSection } from './WeaknessSection';
import './StatusSection.css';
import { useLimits, useMeritsNFlaws, useStateNHealth } from '../../../../services/storageAdapter';
import { useResource } from '../../../../i18nResources';

interface StatusSectionProps {
  className?: string;
}

export function StatusSection(props: StatusSectionProps) {
  const { className } = props;
  const { t } = useTranslation();

  const meritsNFlawsService = useMeritsNFlaws();
  const { meritOptions, flawOptions, pathOptions } = useResource();
  const stateNHealthService = useStateNHealth();
  const { limits } = useLimits();

  return (
    <div className={classnames("StatusSection tw-flex tw-gap-x-4", className)}>
      <div className="tw-flex-1">
        <Subheader className="tw-mb-2">
          {t('charsheet.status.merits')}
        </Subheader>
        <MeritsSection
          className="tw-mb-4"
          {...meritsNFlawsService}
          meritOptions={meritOptions}
        />

        <Subheader className="tw-mb-2">
          {t('charsheet.status.flaws')}
        </Subheader>
        <FlawsSection
          {...meritsNFlawsService}
          flawOptions={flawOptions}
        />
      </div>
      <div className="tw-flex-1">
        <Subheader
          id="humanity.header"
          className="tw-mb-2"
        >
          {t('charsheet.status.humanity')}
        </Subheader>
        <HumanitySection
          className="tw-mb-4 print:tw-mb-2"
          pathOptions={pathOptions}
          {...stateNHealthService}
        />

        <Subheader className="tw-mb-2 tw-mt-2">
          {t('charsheet.status.willpower')}
        </Subheader>
        <WillSection
          className="tw-mb-4 print:tw-mb-2"
          {...stateNHealthService}
        />

        <Subheader
          id="bloodpool.header"
          className="tw-mb-2 tw-mt-2"
        >
          {t('charsheet.status.bloodpool')}
        </Subheader>
        <BloodpoolSection
          {...stateNHealthService}
          limits={limits}
        />
      </div>
      <div className="tw-flex-1">
        <Subheader className="tw-mb-2">
          {t('charsheet.status.health')}
        </Subheader>
        <HealthSection
          className="tw-mb-6 print:tw-mb-2"
          {...stateNHealthService}
        />

        <Subheader className="tw-mb-2">
          {t('charsheet.status.weakness')}
        </Subheader>
        <WeaknessSection
          className='tw-mb-6 print:tw-mb-2'
          {...stateNHealthService}
        />

        <Subheader className="tw-mb-2">
          {t('charsheet.status.experience')}
        </Subheader>
        <ExperienceSection
          {...stateNHealthService}
        />
      </div>
    </div>
  );
}



