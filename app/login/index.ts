/**
 * Created by piggs on 2016/12/20.
 */
/**
 * export 出来的东西有先后顺序，比如login.component 依赖 login.component，
 * 那么login.component 必须要在login.component 之后export
 */
export * from './login.component';
export * from './login.module';
export * from './login-routing.module';
