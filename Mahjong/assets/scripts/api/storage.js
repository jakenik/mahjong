module.exports = {
    set(name, data){
        if(typeof userData === 'object'){
            cc.sys.localStorage.setItem(name, JSON.stringify(data));
        } else {
            cc.sys.localStorage.setItem(name, data);
        }
    },
    get(name){
        const local = cc.sys.localStorage.getItem(name)
        try {
            local = JSON.parse(local);
        } catch (error) {}
        return local
    },
    rm(name) {
        cc.sys.localStorage.removeItem(name)
    }
}