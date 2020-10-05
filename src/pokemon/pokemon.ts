import fetch from 'node-fetch';

export interface IPokemon {
  id: number;
  weight: number;
  height: number;
  moves: string[];
}

export interface IResponse {
  id: number;
  weight: number;
  height: number;
  moves: {
    move: {
      name: string;
    };
  };
}

export class Pokemon {
  url = 'https://pokeapi.co/api/v2/pokemon';

  /**
   * Gets the list of Pokemon info objects
   * @param names list of names
   */
  public async getPokemonsByNameList(names: string[]): Promise<IPokemon[]> {
    // TO BE IMPLEMENTED (my implementation)
    var validname:string[];
    var  invalidname:string[];
    
    names.forEach( element => {
      if(this.checkNameValid(element)) {
        validname.push(element);
      } else {
        invalidname.push(element);
      }
    })

      var response  = {
        data: validname.
        error:
      }



    
    


    return null;
  }

  /**
   * Gets a Pokemon info object
   * @param name
   */
  public async getPokemonByName(name: string): Promise<IResponse> {
    if (this.checkNameValid(name)) {
      const res = await fetch(`${this.url}/${name}`);
      const json: IResponse = await res.json();
      return json;
    } else {
      throw new Error('Name Invalid');
    }
  }

  /**
   * Checks the name parameter is valid
   * @param name string
   */
  checkNameValid(name: string) {
    return name.length > 0;
  }
}
