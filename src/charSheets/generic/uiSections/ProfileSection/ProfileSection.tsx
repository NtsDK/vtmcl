import React, { memo, useCallback } from "react";
import classnames from "classnames";
import * as R from "ramda";

import { DropdownOptions, Profile, ProfileConfig } from "../../../root/domain";
import { ProfileService } from "../../application/ports";

import { ProfileSectionItem } from "./ProfileSectionItem";

interface ProfileSectionProps extends ProfileService {
  profileConfig: ProfileConfig;
  dropdownOptions?: DropdownOptions;
  className?: string;
}

export const ProfileSection = memo(function ProfileSection(
  props: ProfileSectionProps
) {
  const { className, profileConfig, profile, setProfileItem, dropdownOptions } =
    props;

  const itemCount = R.sum(profileConfig.map((el) => el.length));

  const setValue = useCallback(
    function setValue(value: string, itemName: keyof Profile) {
      setProfileItem(itemName, value);
    },
    [setProfileItem]
  );

  return (
    <div
      className={classnames("ProfileSection tw-mb-4 tw-flex ", className)}
      style={{
        display: "grid",
        gridTemplateRows: `repeat(${Math.ceil(itemCount / 2)}, 1fr)`,
        gridTemplateColumns: `repeat(2, 1fr)`,
        // gridTemplateRows: `repeat(${Math.ceil(itemCount/3)}, 1fr)`,
        // gridTemplateColumns: `repeat(3, 1fr)`,
        gridAutoFlow: "column",
        columnGap: "1rem",
      }}
    >
      {profileConfig.map((subArr, index) =>
        subArr.map((item) => {
          if (typeof item === "string") {
            return (
              <ProfileSectionItem
                key={item}
                itemName={item}
                value={profile[item]}
                setValue={setValue}
                dataContext={item}
              />
            );
          } else {
            return (
              <ProfileSectionItem
                key={item.name}
                itemName={item.name}
                value={profile[item.name]}
                setValue={setValue}
                dataContext={item.name}
                options={
                  item.optionsName === undefined
                    ? undefined
                    : dropdownOptions?.[item.optionsName]
                }
              />
            );
          }
        })
      )}
    </div>
  );
});
