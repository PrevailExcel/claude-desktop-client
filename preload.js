import { contextBridge } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  version: process.versions.electron
});
