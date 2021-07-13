class Remote{
    constructor(){
        this.currentCode=0;
        this.code=[0,1,2,3,4,5,6,7,8];
        this.connect=false;
    }

    connectTV(tivi){
        if(!this.connect){
            this.tivi=tivi;
            this.connect=true; 
        }
    }
    disconnectTV(){
        this.connect=false;
    }
    changeChanel(key){
        if(this.connect){
            this.currentCode=this.code[key-1];
            this.tivi.setCurrentChanel(this.currentCode);
        }
        else{
            alert('Tivi is disconnect!');
        }
    }
    increaseChanelTV(){
        if(this.connect){
            if(this.currentCode<8){
                this.currentCode++;
                this.tivi.setCurrentChanel(this.currentCode);
            }
            else{
                this.currentCode=0;
                this.tivi.setCurrentChanel(this.currentCode);
            } 
        }
        else{
            alert('Tivi is disconnect!');
        }
    }
    decreaseChanelTV(){
        if(this.connect){
            if(this.currentCode>0){
                this.currentCode--;
                this.tivi.setCurrentChanel(this.currentCode);
            }
            else{
                this.currentCode=8;
                this.tivi.setCurrentChanel(this.currentCode);
            } 
        }
        else{
            alert('Tivi is disconnect!');
        }
    }
    increaseVolumnTV(){
        if(this.connect){
            this.tivi.increaseVolumn();
        }
        else{
            alert('Tivi is disconnect!');
        }
    }
    decreaseVolumnTV(){
        if(this.connect){
            this.tivi.decreaseVolumn();
        }
        else{
            alert('Tivi is disconnect!');
        }
    }
    playVideoTV(){
        if(this.connect){
            this.tivi.playVideo();
        }
        else{
            alert('Tivi is disconnect!');
        }
    }
}