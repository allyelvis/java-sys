{ pkgs }: {
  deps = [
    pkgs.gradle
    pkgs.rubyPackages_3_2.rb-inotify
    pkgs.ruby
    pkgs.bashInteractive
    pkgs.nodePackages.bash-language-server
    pkgs.man
  ];
}