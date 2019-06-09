# sitespeed.io for performance

### JSON feed

```
docker-compose run sitespeed.io https://www.yourwebsite.com --graphite.host=graphite --budget.configPath budget.json
```

### Manual feed

```
docker-compose run sitespeed.io https://www.yourwebsite.com --graphite.host=graphite --budget.config '{ "budget": { "timings": { "SpeedIndex":1000 } } }'
```