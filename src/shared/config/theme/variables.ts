// це просто як приклад
// якщо був би повний ui-kit кольорів, то можно було б їх записати
// але це сподіваюсь як приклад буде ок

export const brandVariables = {
  en: {
    '--main-gradient': 'linear-gradient(90deg, #FF8E64 0%, #FFB359 100%)',
    '--accent-color': '#FFBA47',
  },
  ua: {
    '--main-gradient': 'linear-gradient(90deg, #0057B7 0%, #FFD700 100%)',
    '--accent-color': '#FFD700',
  }
} as const;

export type BrandKey = keyof typeof brandVariables;

export const getBrandVars = (lang?: string) => {
  const code = lang?.split('-')[0] as BrandKey;
  return brandVariables[code] || brandVariables.en;
};