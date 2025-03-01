namespace Progetto.ModelsDTO;
public class PlayerDTO
{
    public string? IdPlayer { get; set; }
    public string? IdTeam { get; set; }
    public string? IdTeam2 { get; set; }
    public object? IdTeamNational { get; set; }
    public object? IdAPIfootball { get; set; }
    public object? IdPlayerManager { get; set; }
    public string? IdWikidata { get; set; }
    public object? IdTransferMkt { get; set; }
    public object? IdESPN { get; set; }
    public string? StrNationality { get; set; }
    public string? StrPlayer { get; set; }
    public string? StrPlayerAlternate { get; set; }
    public string? StrTeam { get; set; }
    public string? StrTeam2 { get; set; }
    public string? StrSport { get; set; }
    public object? IntSoccerXMLTeamID { get; set; }
    public string? DateBorn { get; set; }
    public object? DateDied { get; set; }
    public string? StrNumber { get; set; }
    public object? DateSigned { get; set; }
    public string? StrSigning { get; set; }
    public string? StrWage { get; set; }
    public string? StrOutfitter { get; set; }
    public string? StrKit { get; set; }
    public string? StrAgent { get; set; }
    public string? StrBirthLocation { get; set; }
    public string? StrEthnicity { get; set; }
    public string? StrStatus { get; set; }
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
    public string? StrGender { get; set; }
    public string? StrSide { get; set; }
    public string? StrPosition { get; set; }
    public object? StrCollege { get; set; }
    public string? StrFacebook { get; set; }
    public string? StrWebsite { get; set; }
    public string? StrTwitter { get; set; }
    public string? StrInstagram { get; set; }
    public string? StrYoutube { get; set; }
    public string? StrHeight { get; set; }
    public string? StrWeight { get; set; }
    public string? IntLoved { get; set; }
    public string? StrThumb { get; set; }
    public string? StrCutout { get; set; }
    public string? StrRender { get; set; }
    public string? StrBanner { get; set; }
    public string? StrFanart1 { get; set; }
    public string? StrFanart2 { get; set; }
    public string? StrFanart3 { get; set; }
    public string? StrFanart4 { get; set; }
    public string? StrCreativeCommons { get; set; }
    public string? StrLocked { get; set; }

    public PlayerDTO() { }

    public PlayerDTO(
        string? idPlayer, string? idTeam, string? strPlayer, string? strNationality,
        string? strPosition, string? dateBorn, string? strHeight, string? strWeight,
        string? strThumb, string? strDescriptionEN, string? strFacebook,
        string? strTwitter, string? strInstagram, string? strYoutube, string? strLocked)
    {
        IdPlayer = idPlayer;
        IdTeam = idTeam;
        StrPlayer = strPlayer;
        StrNationality = strNationality;
        StrPosition = strPosition;
        DateBorn = dateBorn;
        StrHeight = strHeight;
        StrWeight = strWeight;
        StrThumb = strThumb;
        StrDescriptionEN = strDescriptionEN;
        StrFacebook = strFacebook;
        StrTwitter = strTwitter;
        StrInstagram = strInstagram;
        StrYoutube = strYoutube;
        StrLocked = strLocked;
    }

}