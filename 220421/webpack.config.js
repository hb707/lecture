const webpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // npm i -D mini-css-extract-plugin
const path = require('path')
// 이거는 nodejs 환경에서 돌아가는 거기때문에 import 문법이 아닌 require 사용해야함

module.exports = {
    // 웹팩의 이름
    name: 'react-project',
    mode: 'development', // 핫로드? 배울떄 다시. 개발모드인지 실제 사용되는건지 구분해줌.

    // 확장자, 파일 제거
    resolve: {
        extensions: ['.js', '.jsx']
    },

    // 내가 앞으로 번들할 파인들
    entry: {
        app: ['./src/index.jsx'] // 기준이 될 최 상단 파일을 가지고 옴. 그럼 걔 안에서 require, import된 애들을 다 가져옴.
    },
    // 번들하면서 추가적으로 넣을 파일
    module: {
        rules: [{
            test: /\.jsx?/, // 확장자가 .js거나 .jsx인 경우 => 바벨 사용할 수 있도록
            // 바벨은 리액트 만든 사람이 만든게 아님. 리액트 개발자가 자기의 입맛에 맞게 구현한 바벨을 웹팩 바벨 연결해주는 라이브러리
            // 옛날 브라우저에서도 구동할 수 있게 코드를 바꿔주는 바벨ㅇ 필요
            // JSX를 사용할 수 있도록 바벨이 필요
            // npm install -D babel-loader @babel/preset-env @babel/preset-react
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['last 2 chrome versions', '>5% in KR'] // 구글에 browserslist 검색 => github 페이지 뜸.

                        }, debug: true
                    }], // 옛날 브라우저에서도 환경에 맞게 실행시켜줌 -> [,{여기에 브라우저 버전을 적어줌}]
                    '@babel/preset-react' // JSX 사용 위해서
                ],
                plugins: [
                    'react-refresh/babel'
                ]
            }
        }, {
            test: /\.css$/, // 번들링 된 애들 중에 css확장자에게 아래 적용
            use: [MiniCssExtractPlugin.loader, 'css-loader'] // typescript
        }]
    },
    // const webpackPlugin = require('@pmmmwh/react-refrresh-webpack-plugin')
    // npm i -D react-refresh
    plugins: [
        new webpackPlugin(),
        new MiniCssExtractPlugin({ filename: 'style.css' })
    ],
    //내보낼 파일의 위치와 파일명
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    // devServer: {
    //     hot: true,
    //     historyApiFallback: true, // 새로고침
    // }
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 3000,
        hot: true,
        historyApiFallback: true,
    }
}