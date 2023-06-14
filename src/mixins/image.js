import nophoto from "../assets/players/nophoto.png";

export default {
    methods: {
        replaceByDefault(e) {
            e.target.src = nophoto;
        },
        getImagePath(path, id) {
            return `/${path}/${id}.png`;
        },
        fileExists(filename) {
            var http = new XMLHttpRequest();
            http.open("HEAD", filename, false);
            http.send();

            if (http.status === 404) {
                filename = nophoto;
                http = new XMLHttpRequest();
                http.open("HEAD", filename, false);
                http.send();

                return http.status !== 404;
            }
            return http.status !== 404;
        }
    }
}