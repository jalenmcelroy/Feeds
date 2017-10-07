export const RedditUserSchema = {
  name: 'RedditUser',
  primaryKey: 'user_name',
  properties: {
    user_name: 'string',
    access_token: 'string',
    refresh_token: 'string'
  }
};

export const RedditSchema = {
  name: 'Reddit',
  properties: {
    current_user: 'RedditUser'
  }
};
