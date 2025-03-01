namespace Progetto.ModelsDTO;
public class TeamDTO
{
    public string? IdTeam { get; set; }
    public object? IdESPN { get; set; }
    public string? IdAPIfootball { get; set; }
    public string? IntLoved { get; set; }
    public string? StrTeam { get; set; }
    public string? StrTeamAlternate { get; set; }
    public string? StrTeamShort { get; set; }
    public string? IntFormedYear { get; set; }
    public string? StrSport { get; set; }
    public string? StrLeague { get; set; }
    public string? IdLeague { get; set; }
    public string? StrLeague2 { get; set; }
    public object? IdLeague2 { get; set; }
    public string? StrLeague3 { get; set; }
    public object? IdLeague3 { get; set; }
    public string? StrLeague4 { get; set; }
    public object? IdLeague4 { get; set; }
    public string? StrLeague5 { get; set; }
    public object? IdLeague5 { get; set; }
    public string? StrLeague6 { get; set; }
    public object? IdLeague6 { get; set; }
    public string? StrLeague7 { get; set; }
    public object? IdLeague7 { get; set; }
    public object? StrDivision { get; set; }
    public string? IdVenue { get; set; }
    public string? StrStadium { get; set; }
    public string? StrKeywords { get; set; }
    public string? StrRSS { get; set; }
    public string? StrLocation { get; set; }
    public string? IntStadiumCapacity { get; set; }
    public string? StrWebsite { get; set; }
    public string? StrFacebook { get; set; }
    public string? StrTwitter { get; set; }
    public string? StrInstagram { get; set; }
    public string? StrDescriptionEN { get; set; }
    public object? StrDescriptionDE { get; set; }
    public object? StrDescriptionFR { get; set; }
    public object? StrDescriptionCN { get; set; }
    public object? StrDescriptionIT { get; set; }
    public object? StrDescriptionJP { get; set; }
    public object? StrDescriptionRU { get; set; }
    public object? StrDescriptionES { get; set; }
    public object? StrDescriptionPT { get; set; }
    public object? StrDescriptionSE { get; set; }
    public object? StrDescriptionNL { get; set; }
    public object? StrDescriptionHU { get; set; }
    public object? StrDescriptionNO { get; set; }
    public object? StrDescriptionIL { get; set; }
    public object? StrDescriptionPL { get; set; }
    public string? StrColour1 { get; set; }
    public string? StrColour2 { get; set; }
    public string? StrColour3 { get; set; }
    public string? StrGender { get; set; }
    public string? StrCountry { get; set; }
    public string? StrBadge { get; set; }
    public string? StrLogo { get; set; }
    public string? StrFanart1 { get; set; }
    public string? StrFanart2 { get; set; }
    public string? StrFanart3 { get; set; }
    public string? StrFanart4 { get; set; }
    public string? StrBanner { get; set; }
    public string? StrEquipment { get; set; }
    public string? StrYoutube { get; set; }
    public string? StrLocked { get; set; }


    public TeamDTO(){}
    
    public TeamDTO(
            string? idTeam, object? idESPN, string? idAPIfootball, string? intLoved,
            string? strTeam, string? strTeamAlternate, string? strTeamShort, string? intFormedYear,
            string? strSport, string? strLeague, string? idLeague, string? strLocation,
            string? intStadiumCapacity, string? strWebsite, string? strFacebook, string? strTwitter,
            string? strInstagram, string? strDescriptionEN, string? strCountry, string? strBadge,
            string? strLogo, string? strYoutube, string? strLocked)
    {
        IdTeam = idTeam;
        IdESPN = idESPN;
        IdAPIfootball = idAPIfootball;
        IntLoved = intLoved;
        StrTeam = strTeam;
        StrTeamAlternate = strTeamAlternate;
        StrTeamShort = strTeamShort;
        IntFormedYear = intFormedYear;
        StrSport = strSport;
        StrLeague = strLeague;
        IdLeague = idLeague;
        StrLocation = strLocation;
        IntStadiumCapacity = intStadiumCapacity;
        StrWebsite = strWebsite;
        StrFacebook = strFacebook;
        StrTwitter = strTwitter;
        StrInstagram = strInstagram;
        StrDescriptionEN = strDescriptionEN;
        StrCountry = strCountry;
        StrBadge = strBadge;
        StrLogo = strLogo;
        StrYoutube = strYoutube;
        StrLocked = strLocked;
    }
}