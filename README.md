# sitespeed.io for performance

### Multi URLs
- multi url support
- JSON feed for budgets
- Text as datasource
- JavaScript as datasource
- custom output path

> Text as datasource
```
docker-compose run sitespeed.io --graphite.host=graphite urls.txt --budget.configPath budget.json --outputFolder sitespeed-result/yourfolder/$(date +%Y-%m-%d-%H-%M-%S)
```

> JavaScript as datasource
```
docker-compose run sitespeed.io --graphite.host=graphite --multi load_url.js --budget.configPath budget.json
```


### Single URL

> JSON feed

```
docker-compose run sitespeed.io https://www.yourwebsite.com --graphite.host=graphite --budget.configPath budget.json
```

> Manual feed

```
docker-compose run sitespeed.io https://www.yourwebsite.com --graphite.host=graphite --budget.config '{ "budget": { "timings": { "SpeedIndex":1000 } } }'
```