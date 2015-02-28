Package.describe({
    name: 'vazco:universe-ebook-converter',
    summary: 'Convert an ebook from one format to another',
    version: '0.1.6',
    git: 'https://github.com/cristo-rabani/universe-ebook-converter.git'
});

Package.onUse(function (api) {
    api.versionsFrom(['METEOR@1.0']);
    api.use([
        'underscore',
        'vazco:universe-core@1.2.4'
    ], ['server']);
    api.add_files('ebookConverter.js', 'server');
    api.export(['UniEBookConverter']);
});
