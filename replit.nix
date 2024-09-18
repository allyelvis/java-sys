{ pkgs }: {
  deps = [
    pkgs.ruby
    pkgs.bashInteractive
    pkgs.nodePackages.bash-language-server
    pkgs.man
  ];
}