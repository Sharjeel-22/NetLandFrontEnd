import http from '../http-common';

class ProfileDataService {
    create(data) {
        return http.post("/userprofile",data);
    };
    updatePassword(data){
        return http.put("/changepassword",data);
    };
    createNFT (data) {
        return http.post("/postnft",data);
    };
    getActivites() {
        return http.get("/activites");
    };
    getAllMinting() {
        return http.get("/mintings")
    }
    getAllLiveAuctions() {
        return http.get("/getnfts");
    }
};
export default new ProfileDataService();