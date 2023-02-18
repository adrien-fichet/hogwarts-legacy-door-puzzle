import subprocess
import shutil
import webbrowser
from pathlib import Path
from bs4 import BeautifulSoup


cwd = str(Path(__file__).resolve().parent)


def minify_svg(svg):
    node = Path.home() / 'Documents/nodejs/node-v18.14.1-linux-x64/bin/node'
    svgo = f'{node} {Path.home() / "Documents/svgo/node_modules/.bin/svgo"}'
    subprocess.call(f'{svgo} -o build/{svg}.min.svg -i src/{svg}.svg', shell=True, cwd=cwd)


def main():
    minify_svg('dessin')
    with open('build/dessin.min.svg', 'r') as dessin_svg_file:
        dessin_svg = dessin_svg_file.read()
        
    with open('src/index.html', 'r') as index_file:
        index = BeautifulSoup(index_file, 'html.parser')
        for i in range(1, 3):
            div = index.find(id=f'puzzle-{i}')
            div.append(BeautifulSoup(dessin_svg, 'html.parser'))

    with open('build/index.html', 'w') as index_build_file:
        index_build_file.write(str(index))

    for filename in ('main.css', 'main.js'):
        shutil.copy2(f'src/{filename}', f'build/{filename}')


if __name__ == '__main__':
    main()
