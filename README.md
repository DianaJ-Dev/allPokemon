# Lista de Pokémon UI

## Descripción

# Descripción

**Lista de Pokémon UI** es un componente de interfaz de usuario que permite visualizar una lista de Pokémon con su nombre. Este componente consume el componente **@pokemon/all-pokemon--dm** para obtener datos de Pokémon desde la API de [PokeAPI](https://pokeapi.co/). Cada Pokémon en la lista tiene un botón que, al hacer clic, muestra sus evoluciones de manera atractiva.

## Características

- Muestra una lista de Pokémon con su nombre.
- Cada Pokémon tiene un botón para ver sus evoluciones.

## Requisitos

- Node.js
- cells-cli

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/DianaJ-Dev/allPokemon
   ```

2. Instala las dependencias:
    ```bash
   npm install
   ```

3. Instala cells-cli globalmente si no lo tienes instalado:
    ```bash
    npm install -g cells-cli
    ```

4. Inicia la aplicación localmente:
    ```bash
    cells lit-component:serve
    ```
### Uso

1. Añade la dependencia del componente en tu package.json:
    ```bash
    @semillero/evolution-pokemones": "git+https://github.com/DianaJ-Dev/allPokemon.git#main
    ```

2. Instala la dependencia:
   ```bash
    npm install
    ```
3. Importa el componente en tu aplicación:
    ```bash
    import '@semillero/all-pokemon/all-pokemon.js'
    ```
4. Añade el componente a tu HTML:
   ```bash
    <all-pokemon></all-pokemon>
    ```
#### Estilos
Puedes personalizar los estilos del componente modificando el archivo CSS correspondiente. Asegúrate de incluir el archivo de estilos en tu proyecto.    