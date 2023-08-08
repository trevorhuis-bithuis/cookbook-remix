function buildConfig({
  action,
  document = null,
  update = null,
  filter = null,
  projection = null,
  sort = null,
  limit = null,
  skip = null,
  pipeline = null,
}: any) {
  let config: any = {
    method: "post",
    url: `${process.env.DATA_API_BASE_URL}/action/${action}`,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "api-key": process.env.DATA_API_KEY,
    },
    data: {
      dataSource: "cookbook",
      database: "cookbook",
      collection: "Recipe",
    },
  };

  if (document) config.data.document = document;
  if (update) config.data.update = update;
  if (filter) config.data.filter = filter;
  if (projection) config.data.projection = projection;
  if (sort) config.data.sort = sort;
  if (limit) config.data.limit = limit;
  if (skip) config.data.skip = skip;
  if (pipeline) config.data.pipeline = pipeline;

  return config;
}

export { buildConfig };
