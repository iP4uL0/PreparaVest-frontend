import React, { createContext, useState, type PropsWithChildren } from "react";
import type { ImageSourcePropType } from "react-native";

export type AvatarContextType = {
  selectedAvatar: ImageSourcePropType;
  changeAvatar: (newAvatar: ImageSourcePropType) => void;
};

export const AvatarContext = createContext<AvatarContextType | undefined>(
  undefined
);

export const AvatarProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [selectedAvatar, setSelectedAvatar] = useState<ImageSourcePropType>(
    require("../../assets/avatares/0.png")
  );

  const changeAvatar = (newAvatar: ImageSourcePropType) => {
    setSelectedAvatar(newAvatar);
  };

  return (
    <AvatarContext.Provider value={{ selectedAvatar, changeAvatar }}>
      {children}
    </AvatarContext.Provider>
  );
};
