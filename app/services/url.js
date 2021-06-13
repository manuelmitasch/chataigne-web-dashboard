import Service from '@ember/service';
import ENV from 'chataigne-web-dashboard/config/environment';

export default class UrlProviderService extends Service {

    imageSrc(controlAddress) {
        if (!controlAddress) return false;

        let url = "/fileData?controlAddress=" + controlAddress;
        url = this.devUrl(url);

        return encodeURI(url);
    }

    devUrl(url) {
        if (ENV.environment == 'development') {
            return "http://localhost:9999" + url;
        }

        return url;
    }
}
