namespace Progetto.Models;
public class Event
{
    public string? idEvent { get; set; }
    public object? idAPIfootball { get; set; }
    public string? strEvent { get; set; }
    public object? strEventAlternate { get; set; }
    public string? strFilename { get; set; }
    public string? strSport { get; set; }
    public string? idLeague { get; set; }
    public string? strLeague { get; set; }
    public string? strLeagueBadge { get; set; }
    public string? strSeason { get; set; }
    public string? strDescriptionEN { get; set; }
    public object? strHomeTeam { get; set; }
    public object? strAwayTeam { get; set; }
    public object? intHomeScore { get; set; }
    public string? intRound { get; set; }
    public object? intAwayScore { get; set; }
    public string? intSpectators { get; set; }
    public object? strOfficial { get; set; }
    public object? strTimestamp { get; set; }
    public string? dateEvent { get; set; }
    public object? dateEventLocal { get; set; }
    public string? strTime { get; set; }
    public object? strTimeLocal { get; set; }
    public object? strGroup { get; set; }
    public object? idHomeTeam { get; set; }
    public object? strHomeTeamBadge { get; set; }
    public object? idAwayTeam { get; set; }
    public object? strAwayTeamBadge { get; set; }
    public object? intScore { get; set; }
    public object? intScoreVotes { get; set; }
    public string? strResult { get; set; }
    public string? idVenue { get; set; }
    public string? strVenue { get; set; }
    public string? strCountry { get; set; }
    public string? strCity { get; set; }
    public string? strPoster { get; set; }
    public object? strSquare { get; set; }
    public string? strFanart { get; set; }
    public object? strThumb { get; set; }
    public object? strBanner { get; set; }
    public string? strMap { get; set; }
    public object? strTweet1 { get; set; }
    public object? strTweet2 { get; set; }
    public object? strTweet3 { get; set; }
    public object? strVideo { get; set; }
    public object? strStatus { get; set; }
    public string? strPostponed { get; set; }
    public string? strLocked { get; set; }

    public List<Event>? events { get; set; }
}
