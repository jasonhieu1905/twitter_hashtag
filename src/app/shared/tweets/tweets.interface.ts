export interface TweetInterface {
    tweet: String;
    likes: Number;
    replies: Number;
    retweets: Number;
    hashtags: Array<string>;
    date: Date;
    hashtagsDisplay?: String;
}
