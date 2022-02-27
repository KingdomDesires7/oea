import React, { ComponentType, FC, lazy } from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';
import Route, { AnonymousRoute } from 'components/common/Route';
import { CartProvider } from './CartProvider';
import Home from './Home';
import InvoicePDF from './InvoicePDF';
import ManageSubscription from './ManageSubscription';
import RefreshMonitor from './RefreshMonitor';
import PageError from 'components/common/PageError';
import Invoice from './Invoice';

type LazyModulePromise<T = Record<string, unknown>> = Promise<{
  default: ComponentType<T>;
}>;

const SelectPlan = lazy((): LazyModulePromise => import('./SelectPlan'));
const Cart = lazy((): LazyModulePromise => import('./Cart'));
const PDP = lazy((): LazyModulePromise => import('./PDP'));

const ServicesAndSubscriptionRoutes: FC = () => {
  const { path } = useRouteMatch();

  return (
    <CartProvider>
      <Switch>
        <Route exact path={path} component={Home} />
        <Route
          exact
          path={`${path}manage-subscription/:id`}
          component={ManageSubscription}
        />
        <Route path={`${path}refresh-monitor`} component={RefreshMonitor} />
        <Route path={`${path}invoicepdf`} component={InvoicePDF} />
        <Route path={`${path}invoice/:id`} component={Invoice} />
        <Route path={`${path}cart`} component={Cart} />
        <Route path={`${path}pdp`} component={PDP} />
        <Route path={`${path}select-plan`} component={SelectPlan} />
        <AnonymousRoute>
          <PageError />
        </AnonymousRoute>
      </Switch>
    </CartProvider>
  );
};

export default ServicesAndSubscriptionRoutes;