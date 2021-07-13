class Tivi{
    constructor(){
        this.currentChanel='vtv1.jpg';
        this.chanels=['vtv1.jpg','vtv2.png','htv3.jpg','boomerang.png','CN.png','disney.jpg','hbo.jpg','kidstv.jpg','thvl.jpg'];
        this.volumn=20;
        this.status=false
    }

    turnOn(){
        this.status=true;
        this.displayTV();
    }
    turnOff(){
        this.status=false;
        document.getElementById('video').innerHTML='';
        document.getElementById('volumn').style.display='none';
        document.getElementById('tv').style.backgroundImage='none';
        document.getElementById('tv').style.backgroundColor='rgba(0, 0, 0, 0.8)';
    }
    getStatus(){
        return this.status;
    }
    setCurrentChanel(code){
        if(this.status){
            this.currentChanel=this.chanels[code];
            this.displayTV();
        }
    }
    getCurrentChanel(){
        return this.currentChanel;
    }
    increaseVolumn(){
        if(this.status){
            if(this.volumn<100){
                this.volumn++;
            }
            this.displayTV();
        }
    }
    decreaseVolumn(){
        if(this.status){
            if(this.volumn>0){
                this.volumn--;
            }
            this.displayTV();
        }
    }
    getVolumn(){
        return this.volumn;
    }

    displayTV(){
        document.getElementById('video').innerHTML='';
        document.getElementById('volumn').style.display='block';
        document.getElementById('tv').style.backgroundColor='#fff';
        document.getElementById('tv').style.backgroundImage='url(./assets/img/'+this.currentChanel+')';
        document.getElementById('volumn').value=this.volumn;
    }
    playVideo(){
        if(this.status){
            document.getElementById('volumn').style.display='none';
            document.getElementById('tv').style.backgroundImage='none';
            let html='';
            html+='<video src="./assets/video/video.mp4" width="480px" height="280px" autoplay></video>';
            document.getElementById('video').innerHTML=html;
        }
    }
}