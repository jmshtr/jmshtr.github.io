# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "website"
  spec.version       = "0.0.1"
  spec.authors       = ["James Hunter"]
  spec.email         = ["jmshtr@proton.me"]

  spec.summary       = %q{A simple and clean Jekyll website.}
  spec.homepage      = "https://jmshtr.github.io"
  spec.license       = "GNU GPLv3"

#  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.9.0"
end