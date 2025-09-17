
import fs from 'fs/promises';
import path from 'path';
import themes from '../src/config/themes.js';
import baseColors from '../src/config/base-colors.js';

const tailwindConfigPath = path.resolve(process.cwd(), 'tailwind.config.mjs');

const getMonthName = (monthIndex) => {
  const months = [
    'january', 'february', 'march', 'april', 'may', 'june',
    'july', 'august', 'september', 'october', 'november', 'december'
  ];
  return months[monthIndex];
};

const formatObjectForConfig = (obj) => {
  const entries = Object.entries(obj).map(([key, value]) => {
    const formattedValue = typeof value === 'string' ? `'${value}'` : formatObjectForConfig(value);
    return `        '${key}': ${formattedValue}`;
  });
  return `{\n${entries.join(',\n')}\n      }`;
};

const updateTailwindConfig = async () => {
  try {
    const now = new Date();
    const currentMonth = getMonthName(now.getMonth());

    const themeToApply = themes[currentMonth] || themes.default;
    const combinedColors = { ...themeToApply, ...baseColors };

    const colorsString = formatObjectForConfig(combinedColors);

    let configContent = await fs.readFile(tailwindConfigPath, 'utf8');

    configContent = configContent.replace(
      /colors: {[\s\S]*?},/s,
      `colors: ${colorsString},`
    );

    await fs.writeFile(tailwindConfigPath, configContent, 'utf8');
    console.log(`Successfully updated tailwind.config.mjs with the theme for ${currentMonth}.`);
  } catch (err) {
    console.error('Error updating Tailwind config:', err);
  }
};

updateTailwindConfig();
