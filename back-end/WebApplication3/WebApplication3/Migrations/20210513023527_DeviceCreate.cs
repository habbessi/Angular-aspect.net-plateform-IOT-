using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication3.Migrations
{
    public partial class DeviceCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DeviceDetails",
                columns: table => new
                {
                    DeviceDetailsID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Type = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    Unite = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    ZoneID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DeviceDetails", x => x.DeviceDetailsID);
                    table.ForeignKey(
                        name: "FK_DeviceDetails_ZoneDetails_ZoneID",
                        column: x => x.ZoneID,
                        principalTable: "ZoneDetails",
                        principalColumn: "ZoneDetailsID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DeviceDetails_ZoneID",
                table: "DeviceDetails",
                column: "ZoneID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DeviceDetails");
        }
    }
}
