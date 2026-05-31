{pkgs ? import <nixpkgs> {}}:
pkgs.mkShell {
  buildInputs = with pkgs; [
    (texlive.combine {
      inherit
        (texlive)
        scheme-basic
        latex-bin
        latexmk
        collection-fontsrecommended
        collection-latexextra
        fontawesome5
        ;
    })
  ];

  shellHook = ''
    echo "LaTeX environment loaded"
    echo "Build CV with: pdflatex en.tex"
    echo "Or use: latexmk -pdf en.tex"
  '';
}
