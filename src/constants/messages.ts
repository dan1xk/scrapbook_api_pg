export const defaultErrorMessage = 'Ocorreu um Erro, tente novamente mais tarde';

export const createMessage = (action: string) => {
    const message = { message: `${action} com sucesso.` }
    return message;
};

export const fieldSize = (field: string, length: number) => 
`${field} precisa ter mais de ${length} caracteres.`;
