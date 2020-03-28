import { NavigationState, Router, DefaultRouterOptions, ParamListBase } from './types';
export declare type StackActionType = {
    type: 'REPLACE';
    payload: {
        name: string;
        key?: string | undefined;
        params?: object;
    };
    source?: string;
    target?: string;
} | {
    type: 'PUSH';
    payload: {
        name: string;
        key?: string | undefined;
        params?: object;
    };
    source?: string;
    target?: string;
} | {
    type: 'POP';
    payload: {
        count: number;
    };
    source?: string;
    target?: string;
} | {
    type: 'REUSE_AND_PUSH';
    payload: {
        name: string;
        key?: string | undefined;
        params?: object;
    };
    source?: string;
    target?: string;
} | {
    type: 'MOVE_TO_BOTTOM';
    source?: string;
    target?: string;
} | {
    type: 'POP_TO_TOP';
    source?: string;
    target?: string;
};
export declare type StackRouterOptions = DefaultRouterOptions;
export declare type StackNavigationState = NavigationState & {
    /**
     * Type of the router, in this case, it's stack.
     */
    type: 'stack';
};
export declare type StackActionHelpers<ParamList extends ParamListBase> = {
    /**
     * Replace the current route with a new one.
     *
     * @param name Route name of the new route.
     * @param [params] Params object for the new route.
     */
    replace<RouteName extends keyof ParamList>(...args: ParamList[RouteName] extends undefined ? [RouteName] | [RouteName, ParamList[RouteName]] : [RouteName, ParamList[RouteName]]): void;
    /**
     * Push a new screen onto the stack.
     *
     * @param name Name of the route for the tab.
     * @param [params] Params object for the route.
     */
    push<RouteName extends keyof ParamList>(...args: ParamList[RouteName] extends undefined | any ? [RouteName] | [RouteName, ParamList[RouteName]] : [RouteName, ParamList[RouteName]]): void;
    /**
     * Pop a screen from the stack.
     */
    pop(count?: number): void;
    /**
     * Pop to the first route in the stack, dismissing all other screens.
     */
    popToTop(): void;
};
export declare const StackActions: {
    replace(name: string, params?: object | undefined): StackActionType;
    push(name: string, params?: object | undefined): StackActionType;
    pop(count?: number): StackActionType;
    reuseAndPush(name: string, params?: object | undefined): StackActionType;
    moveToBottom(): StackActionType;
    popToTop(): StackActionType;
};
export default function StackRouter(options: StackRouterOptions): Router<StackNavigationState, {
    type: "GO_BACK";
    source?: string | undefined;
    target?: string | undefined;
} | {
    type: "NAVIGATE";
    payload: {
        key: string;
        name?: undefined;
        params?: object | undefined;
    } | {
        name: string;
        key?: string | undefined;
        params?: object | undefined;
    };
    source?: string | undefined;
    target?: string | undefined;
} | {
    type: "RESET";
    payload: import("./types").PartialState<NavigationState>;
    source?: string | undefined;
    target?: string | undefined;
} | {
    type: "SET_PARAMS";
    payload: {
        params?: object | undefined;
    };
    source?: string | undefined;
    target?: string | undefined;
} | {
    type: "REPLACE";
    payload: {
        name: string;
        key?: string | undefined;
        params?: object | undefined;
    };
    source?: string | undefined;
    target?: string | undefined;
} | {
    type: "PUSH";
    payload: {
        name: string;
        key?: string | undefined;
        params?: object | undefined;
    };
    source?: string | undefined;
    target?: string | undefined;
} | {
    type: "POP";
    payload: {
        count: number;
    };
    source?: string | undefined;
    target?: string | undefined;
} | {
    type: "REUSE_AND_PUSH";
    payload: {
        name: string;
        key?: string | undefined;
        params?: object | undefined;
    };
    source?: string | undefined;
    target?: string | undefined;
} | {
    type: "MOVE_TO_BOTTOM";
    source?: string | undefined;
    target?: string | undefined;
} | {
    type: "POP_TO_TOP";
    source?: string | undefined;
    target?: string | undefined;
}>;
