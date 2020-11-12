class Route {
    static IS_MOBILE: boolean = screen.width < 800;
    static CURRENT_URL: string = document.location.pathname;
    static IS_INDEX: boolean = Route.CURRENT_URL.includes('index') || Route.CURRENT_URL === '/';
    static IS_DASHBOARD: boolean = Route.CURRENT_URL.includes('dashboard');
    static IS_OPERA: boolean = navigator.userAgent.toLowerCase().indexOf('opera') > -1;
    static IS_FIREFOX: boolean = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    static IS_CHROME: boolean = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
    
    public static redirect = (url: string): void => {
        Document.prototype.location.pathname = url
    }

}

export default Route;