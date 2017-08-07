interface Hotel {
    id: number;
    name: string;
    rank: number;
}

function get(id: number): Hotel {
    return {id: id, name: "Some hotel name", rank: 5};
}

console.dir(get(1));