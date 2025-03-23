import { Font } from '@react-pdf/renderer';

Font.register({
    family: 'Inter',
    fonts: [
        { src: '/fonts/Inter-Regular.ttf', fontWeight: 'normal', fontStyle: 'normal' },
        { src: '/fonts/Inter-Bold.ttf', fontWeight: 'bold', fontStyle: 'normal' },
        { src: '/fonts/Inter-Italic.ttf', fontWeight: 'normal', fontStyle: 'italic' },
        { src: '/fonts/Inter-BoldItalic.ttf', fontWeight: 'bold', fontStyle: 'italic' },
    ],
});

Font.register({
    family: 'Inter Display',
    fonts: [
        { src: '/fonts/InterDisplay-Regular.ttf', fontWeight: 'normal', fontStyle: 'normal' },
        { src: '/fonts/InterDisplay-Bold.ttf', fontWeight: 'bold', fontStyle: 'normal' },
        { src: '/fonts/InterDisplay-Italic.ttf', fontWeight: 'normal', fontStyle: 'italic' },
        { src: '/fonts/InterDisplay-BoldItalic.ttf', fontWeight: 'bold', fontStyle: 'italic' },
    ],
});
