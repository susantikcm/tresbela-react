import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import * as ROUTES from './routes.paths';

import HomePage from '../../pages/homepage/homepage.component';
import CategoryList from '../../pages/category/category-list.component';
import ShopList from '../../pages/shop/list/shop-list';
import ShopDetails from '../../pages/shop/details/shop-details';
import ShopForm from '../../pages/shop/form/shop-form';

import { SIGN_UP_FORM, SIGN_IN_FORM } from "../../models/form-structure/user";
// import SignUp from '../../pages/signup/signup.component';

import Subscriptions from '../../pages/subscriptions/subscriptions.component';
import Feedback from '../../pages/feedback/feedback.component';

const AuthenticationForm = lazy(() =>
    import("../../pages/authentication/authentication-form")
);

const Routes = () => (
    <Suspense fallback={<div>Loading ...</div>}>
        <Switch>
            <Route exact path={process.env.PUBLIC_URL + ROUTES.HOME} component={HomePage} />
            <Route path={process.env.PUBLIC_URL + ROUTES.CATEGORY} component={CategoryList} />
            <Route path={process.env.PUBLIC_URL + ROUTES.SHOP} component={ShopList} />
            <Route path={`${process.env.PUBLIC_URL}${ROUTES.SHOP}${ROUTES.DETAILS}/:id`} component={ShopDetails} />
            <Route path={[`${process.env.PUBLIC_URL}${ROUTES.SHOP}${ROUTES.CREATE}`, `${process.env.PUBLIC_URL}${ROUTES.SHOP}${ROUTES.UPDATE}/:id`]} component={ShopForm} />
            
            <Route path={process.env.PUBLIC_URL + ROUTES.SIGN_IN}
                render={() => <AuthenticationForm formTitle="SignIn" buttonText="Login" formFields={SIGN_IN_FORM} />}
            />
            <Route path={process.env.PUBLIC_URL + ROUTES.SIGN_UP}
                render={() => <AuthenticationForm formTitle="SignUp" buttonText="Register" formFields={SIGN_UP_FORM} />}
            />
            {/* <Route path="/restore-password" component={RestorePass} />
            <Route path="/forgot-password" component={ForgotPass} /> */}
            <Route exact path={process.env.PUBLIC_URL + ROUTES.SUBSCRIPTIONS} component={Subscriptions} />
            <Route exact path={process.env.PUBLIC_URL + ROUTES.FEEDBACK} component={Feedback} />
        </Switch>
    </Suspense>
)
export default Routes;