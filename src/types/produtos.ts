export type produto = {
    id: number;
    nome:string;
    descricaoCurta:string;
    descricaoLonga:string;
    precoporKg:number,
    ativo: boolean;
    imagem:string;
    categoriaIds: number[]
}