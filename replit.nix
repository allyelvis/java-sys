{ pkgs }: {
  deps = [
    pkgs.rubyPackages_3_2.rb-inotify
    pkgs.ruby
    pkgs.bashInteractive
    pkgs.nodePackages.bash-language-server
    pkgs.man
  ];
}