import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { SettingsWrapper } from "./state/settings-context.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // @ts-ignore
      // пример взят из документации.
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

// сохраняем в localStorage
const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      <SettingsWrapper>
        <App />
      </SettingsWrapper>
    </PersistQueryClientProvider>
  </React.StrictMode>
);
