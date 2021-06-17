import * as path from "path";

export class Constants {
    static DB_CONNECTION_STRING: string = "mongodb://localhost/hashve";
    // static DB_CONNECTION_STRING: string = "mongodb://212.109.221.51/hashve";
    
    // static DB_CONNECTION_STRING: string = "mongodb://80.244.175.5/hashve";
    static JWT_SECRET: string = "my super secret key";
    static JWT_EXPAIRE_TIME: number = 60000;
    static FACEBOOK = {
        APP_ID: "143307069683780",
        APP_SECRET: "a8a17af58ae8f19089de40c85d1dfeb0"
    };
    static GOOGLE = {
        APP_ID: "716201763995-t5e7f8hohj4kkib6sjou349ligtg9ujm.apps.googleusercontent.com",
    };
    static PUBLIC_PATH: string = path.join(__dirname, "../../../public/");
    static CACHE_PATH: string = path.join(__dirname, "../../../cache/");
    static CACHE_TTL: 900;
    static urlProtocol: string = "https://";
    static host: string = "backend.hashve.co.il";
    static STORE_ADMIN_URL: string = "store-admin.hashve.co.il";
    static ui_url: string = Constants.urlProtocol + "hashve.co.il";
    static siteName: string = "hashve.co.il";
    // static ui_url: string = "zerba.co.il";
    static adminMail = "admin@hashve.co.il";
    static mail: any = {
        login: "sales@hashve.co.il",
        password: "ROMANENKO120978"
    };
    static AVATARS: string = "assets/avatars/";
    static ITEMS: string = "assets/items/";
    static CITY: string = "assets/city/";
    static ARTICLES: string = "assets/articles/";
    static CATEGORY: string = "assets/category/";
    static STORE: string = "assets/store/";
    static REGION: string = "assets/region/";
    static BANNERS: string = "assets/banners/";
    static MAIL_PATH: string = "mails/";
    static option: any = {
        socketTimeoutMS: 30000,
        keepAlive: true,
        useNewUrlParser: true,
        reconnectTries: 30000
    };
    static sizesName = {
        0: {
            en: 'Normal',
            heb: 'רגיל'
        },
        40: {
            en: 'Large',
            heb: 'גדול'
        },
        80: {
            en: 'Extra',
            heb: 'ענק'
        },
    };
}
