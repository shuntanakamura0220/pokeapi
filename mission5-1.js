//非同期処理：特定のコードの実行が完了するのを待たずに次の処理を進めるプログラミング手法
// asyncを関数に付けることで、その関数は非同期であると宣言
async function getPokemonData(pokemonName) {
    // awaitを使うことで、HTTPリクエストが完了するまで待ち、その結果を変数に格納
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await response.json();

    console.log(data);

    displayPokemonData(data)
}

function displayPokemonData(data) {
    var object = document.getElementById("pokemonData");
    object.innerHTML = `
        <h2>${data.name.toUpperCase()}</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}" width="100px" height="100px">
        <p>タイプ: ${data.types.map(type => type.type.name).join(", ")}</p>
        <p>高さ： ${data.height/10}m</p>
        <p>重さ： ${data.weight/10}kg</p>
    `;
}

function search() {
    // 数字が入力されても表示される　ー＞　図鑑番号でもデータを取得できる
    var name = document.getElementById("input").value.trim();
    if (name) {
        getPokemonData(name);
    } else {
        alert("ポケモンの名前を英語で入力してください")
    }
}