(() => {

    // Tipos
    const batman: String = 'Bruce';
    const superman: String = 'Clark';
  
    const existe: boolean = false;
  
    // Tuplas
    const parejaHeroes: [String, String] = [batman,superman];
    const villano: [String, number, boolean]= ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados: String[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    enum fuerza {
      flash = 5,
      superman = 100,
      batman = 1,
      acuaman = 0
    }
    const fuerzaFlash: fuerza = fuerza.flash;
    const fuerzaSuperman: fuerza = fuerza.superman;
    const fuerzaBatman: fuerza = fuerza.batman;
    const fuerzaAcuaman: fuerza = fuerza.acuaman;
  
    // Retorno de funciones
    function activar_batiseñal() : String{
      return 'activada';
    }
  
    function pedir_ayuda(): void{
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: String = '100';
    const largoDelPoder: number = poder.length;
    console.log( largoDelPoder );
  
  
  })()
  
  