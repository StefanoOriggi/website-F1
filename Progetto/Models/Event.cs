namespace Progetto.Models;
public class Event
{
    public string? idEvent { get; set; }
    public string? strEvent { get; set; }
    public string? strFilename { get; set; }
    public string? strSport { get; set; }
    public string? idLeague { get; set; }
    public string? strLeague { get; set; }
    public string? strLeagueBadge { get; set; }
    public string? strSeason { get; set; }
    public string? strDescriptionEN { get; set; }
    public string? intRound { get; set; }
    public string? intSpectators { get; set; }
    public string? dateEvent { get; set; }
    public string? strTime { get; set; }
    public string? strResult { get; set; }
    public string? idVenue { get; set; }
    public string? strVenue { get; set; }
    public string? strCountry { get; set; }
    public string? strCity { get; set; }
    public string? strPoster { get; set; }
    public string? strFanart { get; set; }
    public string? strMap { get; set; }
    public string? strPostponed { get; set; }
    public string? strLocked { get; set; }

    public List<Event>? events { get; set; }
}
