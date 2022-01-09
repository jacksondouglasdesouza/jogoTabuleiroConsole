let table = {

	field: [
	['', '', ''],
	['', '', ''],
	['', '', '']	
	],
    position:[0,0],

            /*FUNÇÕES DE MOVIMENTAÇÕES NO TABULEIRO */


    up(){  /* FUNÇÃO-01 */
        if(this.position[0] > 0){
            this.position[0]--;
        }
        this.print();
    },

    down(){  /* FUNÇÃO-02 */
        if(this.position[0] < this.field.length-1){
            this.position[0]++;
        }
        this.print();
    },

    left(){  /* FUNÇÃO-03 */
        if(this.position[1] > 0){
            this.position[1]--;
        }
        this.print();
    },

    right(){  /* FUNÇÃO-04 */
        if(this.position[1] < this.field[this.position[0]].length-1){
            this.position[1]++;
        }
        this.print();
    },


            /*  CORPO DO JOGO E LEITURA DO POSICIONAMENTO NO TABULEIRO */
	print(){
		let lineStr = '';
			for(let i = 0; i < this.field.length; i++){
				let line = this.field[i];
					for(let j = 0; j < line.length; j++){
							if(this.position[0] === i && this.position[1] === j){
									lineStr += '[ X ]';
							} else {
									lineStr += '[   ]';
						}
			        }
                lineStr += '\n';
	    }
        console.log(lineStr);
    }
}

table.print();
