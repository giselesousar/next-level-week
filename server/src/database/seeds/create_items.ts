import Knex from 'knex';

export async function seed(knex: Knex){
   await knex('items').insert([
        { title: 'Lãmpadas', image: 'lampadas.svg' },
        { title: 'Pilhas e Baterias', image: 'baterias.svg' },
        { title: 'Papéis e Papelão', image: 'papeis-papelao.svg' },
        { title: 'Resíodos Eletrônicos', image: 'eletronicos.svg' },
        { title: 'Resíodos Orgânicos', image: 'organicos.svg' },
        { title: 'Óleo de Cozinha', image: 'oleo.svg' },

        
    ]);
}