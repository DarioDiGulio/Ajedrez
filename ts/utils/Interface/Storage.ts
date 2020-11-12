class $Storage {
  private initialStorage: Object = {
    token: "",
  };

  constructor() {
    localStorage.setItem("storage_app", JSON.stringify(this.initialStorage));
  }

  public static editStorageItem = (item: string, newValue: Object): void => {
    const storageApp = JSON.parse(localStorage.getItem("storage_app"));
    storageApp[item] = newValue;
    localStorage.removeItem("storage_app");
    localStorage.setItem("storage_app", JSON.stringify(storageApp));
  };

  public static getStorageItem = (item: string): Object => {
    const storageApp = JSON.parse(localStorage.getItem("storage_app"));
    return storageApp[item];
  };
}

export default $Storage;
