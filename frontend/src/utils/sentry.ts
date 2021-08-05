import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import { setLogger } from 'react-query';

const sentryDSN = 'https://1b733dea86884caab1da5f321d45291a@jujeol-sentry.kro.kr/1';

const sentryCaptureMessage = ({ code, message }: { code: number; message: string }) => {
  Sentry.captureMessage(`${code} : ${message}`);
};

const initSentry = () => {
  Sentry.init({
    dsn: sentryDSN,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
  });

  setLogger({
    log: sentryCaptureMessage,
    warn: sentryCaptureMessage,
    error: sentryCaptureMessage,
  });
};

export { initSentry, sentryCaptureMessage };
