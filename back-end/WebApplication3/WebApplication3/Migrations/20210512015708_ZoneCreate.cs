using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication3.Migrations
{
    public partial class ZoneCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ZoneDetails",
                columns: table => new
                {
                    ZoneDetailsID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Designation = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    TypeAgri = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    SiteID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ZoneDetails", x => x.ZoneDetailsID);
                    table.ForeignKey(
                        name: "FK_ZoneDetails_SiteDetails_SiteID",
                        column: x => x.SiteID,
                        principalTable: "SiteDetails",
                        principalColumn: "SiteDetailsID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ZoneDetails_SiteID",
                table: "ZoneDetails",
                column: "SiteID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ZoneDetails");
        }
    }
}
