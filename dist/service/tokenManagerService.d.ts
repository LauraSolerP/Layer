type TokenData = {
    sub: string;
};
export declare class TokenManager {
    static generate(data: TokenData): Promise<string>;
    static verify(token: string): Promise<TokenData>;
}
export {};
//# sourceMappingURL=tokenManagerService.d.ts.map