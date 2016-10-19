export default class Utils {
    // Yeah man
    //

    getExtension(path) {
        return path.substr(path.lastIndexOf('/') + 1);
    }

    getDate(dateObj) {
        if (isNaN(dateObj.getDate())) {
            return 'Invalid Date';
        }
        let day = dateObj.getDate();
        let month = dateObj.getMonth() + 1;
        let year = dateObj.getFullYear();

        if (day < 10) {
            day = '0' + day;
        }

        if (month < 10) {
            month = '0' + month;
        }

        return `${day}/${month}/${year}`;
    }
}
